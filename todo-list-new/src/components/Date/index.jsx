import { Container, Box } from "./style";
import { useTheme } from "@/stores/theme";

export default function CurrentDate() {
  const { theme } = useTheme();
  const currentDate = new Date();

  const mouths = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const days = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  return (
    <Container>
      <Box align="center" gap={0.4} theme={theme}>
        <h1>{currentDate.getDate()}</h1>
        <Box direction="column" theme={theme}>
          <p>{mouths[currentDate.getMonth()]}</p>
          <p>{currentDate.getFullYear()}</p>
        </Box>
      </Box>
      <Box align="center" theme={theme}>
        <h2>{days[currentDate.getDay()]}</h2>
      </Box>
    </Container>
  );
}
