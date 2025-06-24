using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace chap02
{
    internal class Program
    {
        // 프로그램 시작시 항상 존재하는 함수나 변수 => static 
        // 반환값을 개발자가 적어줘야 함 void => return 값 생략. 
        
        static void Main(string[] args)
        {
            Console.WriteLine("안녕");

            Console.WriteLine(32.GetType());
            Console.WriteLine(129L.GetType());

            Console.WriteLine(3.14f.GetType());
            Console.WriteLine(3.14.GetType());

            Console.WriteLine(true.GetType());
            Console.WriteLine("안녕".GetType());
            Console.WriteLine("A".GetType());
            Console.WriteLine("안녕".Length);
            Console.WriteLine("hello".ToUpper());
            Console.WriteLine("hEllO".ToLower());
            Console.WriteLine("안녕".Substring(1));

            int a = 10;
            double b = 3.12; // 문자 있는 숫자
            string c = "hello";
            bool d = false;
            char e = 'A';

            var f = "hello";
            // var => 타입을 자동으로 추론 
            Console.WriteLine(f.GetType()); //System.String









        }
    }
}
