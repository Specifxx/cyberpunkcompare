import type { Post } from "./types";
import { post as betaMarket } from "./beta-market-before-retail";
import { post as mostExpensive } from "./most-expensive";
import { post as betaVsRetail } from "./beta-vs-retail";
import { post as releaseDate } from "./release-date";
import { post as rarities } from "./rarities";
import { post as retailLaunch } from "./retail-box-launch-price";

export const POSTS: Post[] = [retailLaunch, mostExpensive, betaMarket, betaVsRetail, releaseDate, rarities];
