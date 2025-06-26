using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{   
    // namespace 클래스들을 선언 가능
    // 클래스 안에 함수들 선언 가능
    // AA 클래스 안에 doA 함수가 있다. 
    public class AA
    {
        public void doA()
        {
            Console.WriteLine("AA안 doA 함수호출");
        }

        public static void doB()
        {
            Console.WriteLine("AA안 doB 함수호출");
        }
    }
}
