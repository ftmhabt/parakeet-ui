import { Box, Button } from "parakeet-ui";
import "./App.css";

function App() {
  return (
    <>
      <Box className="text-white p-6 rounded-lg">Parakeet Box</Box>

      <Button variant="secondary">ثانویه</Button>

      <Button variant="ghost" size="sm">
        Ghost
      </Button>

      <Button loading>در حال ارسال</Button>

      <Button className="bg-red-500 text-white">با Tailwind</Button>
    </>
  );
}

export default App;
