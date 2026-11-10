import type { Post } from "./types";
import { post as betaMarket } from "./beta-market-before-retail";
import { post as mostExpensive } from "./most-expensive";
import { post as betaVsRetail } from "./beta-vs-retail";
import { post as releaseDate } from "./release-date";
import { post as rarities } from "./rarities";
import { post as retailLaunch } from "./retail-box-launch-price";
import { post as blackFriday } from "./black-friday";
import { post as cardList } from "./card-list";
import { post as legends } from "./legends";
import { post as packs } from "./packs-in-a-box";

export const POSTS: Post[] = [packs, cardList, legends, blackFriday, retailLaunch, mostExpensive, betaMarket, betaVsRetail, releaseDate, rarities];
