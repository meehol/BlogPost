export class BlogPost {
  id?: number;
  createdDate?: string;
  contents: string;

  constructor(contents: string) {
    this.contents = contents;
  }

}
