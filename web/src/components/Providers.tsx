"use client";
import { ReactNode } from "react";

import ControllerConnector from "@cartridge/connector";

import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  useInjectedConnectors,
  jsonRpcProvider,
  voyager,
  Connector
} from "@starknet-react/core";

export function Providers({ children }: { children: ReactNode }) {
  const connectors = [
    new ControllerConnector({
      rpc: 'https://starknet-sepolia.blastapi.io/9e09cad6-2c9d-47e2-bfd2-3f23def38fe1/rpc/v0_7',
    }) as never as Connector,
  ];
  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={jsonRpcProvider({ rpc: (chain) => ({ nodeUrl: 'https://starknet-sepolia.blastapi.io/9e09cad6-2c9d-47e2-bfd2-3f23def38fe1/rpc/v0_7' }) })}
      connectors={connectors}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
