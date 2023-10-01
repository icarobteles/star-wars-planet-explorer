import { Content, Header, HeaderIcon, HeaderTitle, Wrapper } from "./styles";

interface PlanetSectionProps {
  content: string | null;
  iconUrl: string;
  title: string;
}
export function PlanetSection({ content, iconUrl, title }: PlanetSectionProps) {
  return (
    <Wrapper>
      <Header>
        <HeaderIcon iconUrl={iconUrl} />
        <HeaderTitle>{title}:</HeaderTitle>
      </Header>
      <Content>{content || "Carregando..."}</Content>
    </Wrapper>
  );
}
