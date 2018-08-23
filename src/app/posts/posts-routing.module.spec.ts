import { PostsRoutingModule } from './posts-routing.module';

describe('PostsRoutingModule', () => {
  let postsRoutingModule: PostsRoutingModule;

  beforeEach(() => {
    postsRoutingModule = new PostsRoutingModule();
  });

  it('should create an instance', () => {
    expect(postsRoutingModule).toBeTruthy();
  });
});
