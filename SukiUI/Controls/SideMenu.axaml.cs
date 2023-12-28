using Avalonia;
using Avalonia.Controls;
using Avalonia.Markup.Xaml;
using System;
using System.Globalization;
using System.Linq;
using Avalonia.Data.Converters;
using Avalonia.Interactivity;

namespace SukiUI.Controls
{
    public partial class SideMenu : UserControl
    {
        public delegate void MenuItemChangedEventHandler(object sender, string header);
        public event MenuItemChangedEventHandler MenuItemChanged;
        
        public static readonly StyledProperty<bool> WinUIStyleProperty = AvaloniaProperty.Register<SideMenu, bool>(nameof(WinUIStyle), defaultValue: false);

        public bool WinUIStyle
        {
            get { return GetValue(WinUIStyleProperty); }
            set
            {
                SetValue(WinUIStyleProperty, value);
                if (!value)
                    return;
                
                var border = this.FindControl<Border>("ContentBorder");
                border.BorderThickness = new Thickness(1,1,0,0);
                border.CornerRadius = new CornerRadius(13, 0, 0,0);
                

            }
        }
        public SideMenu()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            AvaloniaXamlLoader.Load(this);
        }

        private void PaneIsClosing(object sender, CancelRoutedEventArgs ev)
        {
            ((SideMenuModel)this.DataContext).MenuVisibility = false;
        }

        private void MenuItemSelectedChanged(object sender, RoutedEventArgs e)
        {
            RadioButton rButton = (RadioButton)sender;
            if (rButton.IsChecked != true)
                return;
            try
            {
                string header = ((TextBlock)((DockPanel)((Grid)rButton.Content).Children.First()).Children.Last()).Text;
                MenuItemChanged?.Invoke(this, header);
            }catch(Exception exc){}
        }
    }
}


