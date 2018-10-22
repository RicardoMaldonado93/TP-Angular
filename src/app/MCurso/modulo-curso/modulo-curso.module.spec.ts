import { ModuloCursoModule } from './modulo-curso.module';

describe('ModuloCursoModule', () => {
  let moduloCursoModule: ModuloCursoModule;

  beforeEach(() => {
    moduloCursoModule = new ModuloCursoModule();
  });

  it('should create an instance', () => {
    expect(moduloCursoModule).toBeTruthy();
  });
});
