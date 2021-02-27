import { Entity, EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../src/models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> {}

export { SurveysUsersRepository }