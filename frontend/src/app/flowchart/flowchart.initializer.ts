import { APP_INITIALIZER } from '@angular/core';
import { FlowchartFacade } from './flowchart.facade';

export const flowchartInitializer =
  (flowchartFacade: FlowchartFacade) => () => {
    flowchartFacade.getImage();
  };

export const flowchartInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: flowchartInitializer,
  multi: true,
  deps: [FlowchartFacade],
};
