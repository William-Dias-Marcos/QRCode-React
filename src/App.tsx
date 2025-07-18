import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("https://portfolio-wdm.vercel.app/");

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6">
      <QRCodeCanvas value={text} />
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
  );
}

export default App;
