class Post{
    constructor(title,content) {
        this.title = title;
        this.content = content;
    }
    //prototype 메서드
    sayHI(){
        console.log(`this.title: ${this.title} this.content: ${this.content}`);
    }
    //정적 메서드
    static doA(){
        console.log(`this.title: ${this.title} this.content: ${this.content}`);
    }
}

const post = new Post('제목제목','내용내용');
console.log(post);

post.sayHI();
Post.doA();

// 정적메서드는 인스턴스 메서드를 참조할 수 없고
// 프로토타입은 참조 가능