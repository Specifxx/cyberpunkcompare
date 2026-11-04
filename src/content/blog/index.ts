import type { Post } from "./types";
import { post as betaMarket } from "./beta-market-before-retail";
import { post as betaVsRetail } from "./beta-vs-retail";
import { post as releaseDate } from "./release-date";
import { post as rarities } from "./rarities";

export const POSTS: Post[] = [betaMarket, betaVsRetail, releaseDate, rarities];
