import { Content, Header, HeaderIcon, HeaderTitle, Wrapper } from "./styles";

interface PlanetSectionProps {
  content: string | null;
  iconUrl: string;
  title: string;
  loading: boolean;
}
export function PlanetSection({ content, iconUrl, loading, title }: PlanetSectionProps) {
  return (
    <Wrapper>
      <Header>
        <HeaderIcon iconUrl={iconUrl} />
        <HeaderTitle>{title}:</HeaderTitle>
      </Header>
      <Content>{loading ? "Carregando..." : content}</Content>
    </Wrapper>
  );
}
