using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace win02
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            MessageBox.Show(textBox1.Text, "첫번째");
            MessageBox.Show(textBox2.Text, "두번째");
            MessageBox.Show(textBox1.Text + textBox2.Text, "더한값");


            //int.Parse => string 을 int 로 전환
            int num1 = int.Parse(textBox1.Text);
            int num2 = int.Parse(textBox2.Text);

            // MessageBox.Show => string 타입만 가능 .ToString 으로 바꿔서 넣어주기
            MessageBox.Show((num1 + num2).ToString(),"더한값");
            MessageBox.Show($"\"{num1 - num2}\"", "빼기값");
            // 문자열 보간법 $"{}"
            // \t -> 탭 만큼 이동
            // \n -> 줄바꿈 


        }
    }
}
