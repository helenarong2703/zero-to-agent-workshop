#!/usr/bin/env python3
"""Extract readable slide text from a PPTX using only the standard library."""

from __future__ import annotations

import argparse
import re
import xml.etree.ElementTree as ET
from pathlib import Path
from zipfile import ZipFile


TEXT = "{http://schemas.openxmlformats.org/drawingml/2006/main}t"


def slide_number(name: str) -> int:
    match = re.search(r"slide(\d+)\.xml$", name)
    return int(match.group(1)) if match else 0


def extract(path: Path) -> str:
    sections: list[str] = []
    with ZipFile(path) as archive:
        slides = sorted(
            (
                name
                for name in archive.namelist()
                if re.fullmatch(r"ppt/slides/slide\d+\.xml", name)
            ),
            key=slide_number,
        )
        for index, name in enumerate(slides, start=1):
            root = ET.fromstring(archive.read(name))
            text = [node.text.strip() for node in root.iter(TEXT) if node.text and node.text.strip()]
            sections.append(f"\n## Slide {index}\n" + "\n".join(text))
    return "\n".join(sections).strip() + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("input", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    args.output.write_text(extract(args.input), encoding="utf-8")


if __name__ == "__main__":
    main()
