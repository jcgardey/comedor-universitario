# Generated by Django 3.1.2 on 2021-01-18 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20210118_1926'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='name',
            field=models.CharField(default='User', max_length=256),
        ),
    ]
