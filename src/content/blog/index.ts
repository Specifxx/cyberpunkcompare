import type { Post } from "./types";
import { post as betaVsRetail } from "./beta-vs-retail";
import { post as releaseDate } from "./release-date";
import { post as rarities } from "./rarities";

export const POSTS: Post[] = [betaVsRetail, releaseDate, rarities];
