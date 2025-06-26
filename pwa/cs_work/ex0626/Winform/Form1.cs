using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Winform
{
    public partial class Form1 : Form
    {
        int num = 10;

        public Form1() // 생성자 -> 
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            
            num++;
            Console.WriteLine(num);
            label4.Text = num.ToString();

            Console.WriteLine($"textBox1.Text = {textBox1.Text}");

            if(textBox1.Text != "")
            {
                label4.Text = textBox1.Text + 1;
                textBox1.Text = ""; // textBox1의 값을 비운다. 
            }
            else
            {
                label4.Text = num.ToString();
            }

        }

        
    }
}
