using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("이름을 입력하세요");
            //string name = Console.ReadLine();
            //Console.WriteLine("나이를 입력하세요");
            //string age = Console.ReadLine();
            //Console.WriteLine($"name = {name} age = {age}");

            // int -> string 

            string a = 123 + "";
            Console.WriteLine($"a={a}");

            string b = 123.ToString();
            string c = Convert.ToString(123);
            string d = $"{123}";
            string e = string.Format("{0}", 123);

            Console.WriteLine($"b = {b}");
            Console.WriteLine($"c = {c}");
            Console.WriteLine($"d = {d}");
            Console.WriteLine($"e = {e}");

            AA aa = new AA();
            aa.doA();

            AA.doB();
            // doB는 static -> 바로 호출 가능

            //string -> int 





        }
    }
}
