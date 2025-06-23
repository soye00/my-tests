using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // 프로그램 시작점 
            Console.WriteLine("안녕하세요");

            int a = 10;
            a += 20;
            string c = a + "aaa";
            bool b = 30<20;

            //''->문자 하나일 때만 ex) 'a'
            // 주석 ctrl + k +  c 
            // 주석 해제 ctrl + k + u
            // 정렬 ctrl k + d 


            Console.WriteLine("a = " + a); //a = 30
            Console.WriteLine("c = " + c); // c = 30aaa
            Console.WriteLine(57 > 230); //false
            Console.WriteLine(b); //false
        }
    }
}
