import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  const [text, setText] = useState("https://portfolio-wdm.vercel.app/");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <div className="flex min-h-svh flex-col items-center justify-center gap-6">
        <QRCodeCanvas value={text} marginSize={2} />
        <div>
          <Input
            type="text"
            placeholder="Seu texto"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <Button type="submit" variant="outline">
          Baixar
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
