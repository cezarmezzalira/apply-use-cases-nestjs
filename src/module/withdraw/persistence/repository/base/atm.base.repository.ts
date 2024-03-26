import Atm from 'src/module/withdraw/core/entity/atm.entity';
import { BaseRepository } from 'src/shared/module/persistence/repository/base.repository';

export default abstract class AtmBaseRepository extends BaseRepository<Atm> { }
