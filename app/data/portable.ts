import type { PortableTextBlock } from "sanity";

let key = 0;
const nextKey = () => `k${++key}`;

export function paragraph(text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: nextKey(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: nextKey(), marks: [], text }],
  };
}

export function heading(text: string, style: "h2" | "h3" = "h2"): PortableTextBlock {
  return {
    _type: "block",
    _key: nextKey(),
    style,
    markDefs: [],
    children: [{ _type: "span", _key: nextKey(), marks: [], text }],
  };
}

export function quote(text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: nextKey(),
    style: "blockquote",
    markDefs: [],
    children: [{ _type: "span", _key: nextKey(), marks: [], text }],
  };
}

export function bullet(text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: nextKey(),
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [{ _type: "span", _key: nextKey(), marks: [], text }],
  };
}

export function codeBlock(code: string, language: string = "typescript", filename?: string): PortableTextBlock {
  return {
    _type: "code",
    _key: nextKey(),
    code,
    language,
    filename: filename || null,
  } as unknown as PortableTextBlock;
}

export function paragraphs(...texts: string[]): PortableTextBlock[] {
  return texts.map(paragraph);
}
