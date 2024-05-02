import { ReactElement } from 'react';

interface ReactRouter extends JSXElement {
  component: ReactElement;
  displayName?: string;
  path: string;
}
