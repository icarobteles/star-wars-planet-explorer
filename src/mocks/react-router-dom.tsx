import { ReactNode } from "react";
import { vitest } from "vitest";

interface LinkProps {
  to: string;
  children: ReactNode;
}

export const useNavigateMock = () => vitest.fn();
export const useLocationMock = () => ({ pathname: "mock-path" });
export const useParamsMock = () => ({ id: "mock-id" });
export const LinkMock = ({ to, children }: LinkProps) => <a href={to}>{children}</a>;
