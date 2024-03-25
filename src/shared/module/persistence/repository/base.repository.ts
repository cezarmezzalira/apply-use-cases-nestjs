export abstract class BaseRepository<T> {
  public abstract findById(id: string): Promise<T | undefined>;
  public abstract save(entity: T): void;
  public abstract update(entity: T): void;
}