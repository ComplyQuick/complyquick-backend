declare module 'pdf2image' {
  interface ConvertOptions {
    outputDirectory: string;
    outputFormat: string;
    singleFile: boolean;
  }

  interface PdfImage {
    name: string;
    path: string;
  }

  export function convert(pdfPath: string, options: ConvertOptions): Promise<PdfImage[]>;
} 