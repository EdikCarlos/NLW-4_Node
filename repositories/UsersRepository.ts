import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from "../src/models/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };