import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker/locale/zh_CN";

import type { SexType } from "@faker-js/faker";

type SubscriptionTier = "free" | "basic" | "business";

interface User {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  subscriptionTier: SubscriptionTier;
}

function createRandomUser(): User {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
}

const getUser = http.post("/api/user", ({}) => {
    return HttpResponse.json(createRandomUser());
});

export default [
    getUser
]