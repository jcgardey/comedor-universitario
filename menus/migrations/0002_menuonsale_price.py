# Generated by Django 3.1.2 on 2021-12-14 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menus', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='menuonsale',
            name='price',
            field=models.DecimalField(decimal_places=2, default=100, max_digits=6),
            preserve_default=False,
        ),
    ]