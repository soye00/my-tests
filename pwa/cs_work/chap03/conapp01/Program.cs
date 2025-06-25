using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace conapp01
{
    internal class Program
    {

        static void Main(string[] args)
        {
            // int는 2^32 -> 4byte 까지 표현 가능
            //int a = (int)1234564545321;

            long b = 1234564545321;
            int a = (int)b;
            Console.WriteLine(a);
            Console.WriteLine(b);

            // 묵시적 형변환은 
            // 데이터 손실이 일어날때는 선언해야함 
            // long -> int : 선언해야함 
            // int -> long : 선언하지 않아도 됨 

            
            
            
            
            // 명시적 형변환
            long e = 12345635131352L;
            int f = (int)e;
;





        }
    }

    class AA
    {
        public void Test()
        {
            Console.WriteLine("AA 클래스의 Test");
        }
    }

    class BB
    {
        public void Test()
        {
            Console.WriteLine("BB 클래스의 Test");
        }
    }







}
