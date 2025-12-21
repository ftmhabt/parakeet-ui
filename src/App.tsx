import { Box, Text } from "parakeet-ui";
import "./App.css";

function App() {
  return (
    <>
      <Box className="text-white p-6 rounded-lg">Parakeet Box</Box>
      <Text size="lg" weight="bold" color="primary">
        سلام، به Parakeet UI خوش آمدید!
      </Text>

      <Text size="sm" color="muted">
        متن کم‌رنگ و راهنما
      </Text>
      <Text size="sm" color="secondary">
        متن کم‌رنگ و راهنما
      </Text>
    </>
  );
}

export default App;
