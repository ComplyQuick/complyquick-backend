declare module 'pptx2pdf' {
  function pptx2pdf(inputPath: string, outputPath: string): Promise<void>;
  export default pptx2pdf;
} 