declare module "html2pdf.js" {
  type Html2PdfOptions = {
    margin?: number | number[];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: Record<string, unknown>;
    jsPDF?: Record<string, unknown>;
    pagebreak?: Record<string, unknown>;
  };

  interface Html2PdfInstance {
    set: (options: Html2PdfOptions) => Html2PdfInstance;
    from: (element: HTMLElement | string) => Html2PdfInstance;
    save: () => Promise<void>;
  }

  interface Html2PdfStatic {
    (): Html2PdfInstance;
    (options: Html2PdfOptions): Html2PdfInstance;
    set: (options: Html2PdfOptions) => Html2PdfInstance;
    from: (element: HTMLElement | string) => Html2PdfInstance;
    save: () => Promise<void>;
    default?: Html2PdfStatic;
  }

  const html2pdf: Html2PdfStatic;
  export default html2pdf;
}
