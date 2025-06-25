using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            int number = 10;
            MessageBox.Show($"number = {number}");
            MessageBox.Show($"number = {number++}");
            MessageBox.Show($"number = {number--}");
            MessageBox.Show($"number = {number}");

        }

        private void button2_Click(object sender, EventArgs e)
        {
            string input = Console.ReadLine();
            MessageBox.Show($"input = {input}");

            // 
            //MessageBox.Show(!true);
            MessageBox.Show((!true).ToString());
        }

        private void button3_Click(object sender, EventArgs e)
        {
            doA();
            doA(100);
            doA(100, 200);
            doA("Hello");

        }

        public void doA()
        {
            MessageBox.Show("doA()함수");
        }
        public void doA(int aa)
        {
            MessageBox.Show($"doA()함수 aa = {aa}");
        }
        public void doA(int aa, int bb)
        {
            MessageBox.Show($"doA()함수 aa = {aa}, bb = {bb}");
        }
        public void doA(string cc)
        {
            MessageBox.Show($"doA()함수 cc = {cc}");
        }

    }
}
