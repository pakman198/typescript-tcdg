import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

// console.log({ user, company });

import { CustomMap } from "./CustomMap";

const map = new CustomMap("map");

map.addMarker(user);
map.addMarker(company);
