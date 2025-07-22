import { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function App() {
  const [text, setText] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQRCode = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 p-4">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* Botão de alternar tema no topo direito */}
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        <h2 className="text-3xl font-semibold tracking-tight">
          Gerador de QR Code
        </h2>

        <div
          ref={qrRef}
          className="p-4 bg-white rounded shadow-md dark:bg-white"
        >
          <QRCodeCanvas value={text || " "} size={150} />
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-sm">
          <Input
            type="text"
            aria-label="Texto para o QR Code"
            placeholder="Digite algo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            type="button"
            variant="outline"
            onClick={downloadQRCode}
            disabled={!text}
          >
            Baixar QR Code
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
