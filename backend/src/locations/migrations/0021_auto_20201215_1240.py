# Generated by Django 3.1.3 on 2020-12-15 05:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0020_auto_20201215_1237'),
    ]

    operations = [
        migrations.RenameField(
            model_name='award',
            old_name='name',
            new_name='name_Award',
        ),
    ]
