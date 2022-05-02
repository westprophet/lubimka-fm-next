export type ITrackRadioheart = ITrackRadioheartNext | ITrackRadioheartPrev | ITrackRadioheartNew;

export interface ITrackRadioheartNext {
  id: string;
  name: string;
  time: string;
}

export interface ITrackRadioheartPrev {
  name: string;
  time: string;
}

export interface ITrackRadioheartNew {
  id: string;
  name: string;
  title: string;
  artist: string;
  genre: string;
}
