export interface ItemObject {
  itemtype: string[];

  typeTitle: {
    [key: string]: string[];
  };

  typePrice: {
    [key: string]: {
      [key: string]: number;
    };
  };
}


