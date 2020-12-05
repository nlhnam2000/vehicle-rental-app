# Generated by Django 3.1.3 on 2020-12-02 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0005_bike_elecbike_elecmoto'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bike',
            name='id',
        ),
        migrations.RemoveField(
            model_name='elecbike',
            name='id',
        ),
        migrations.RemoveField(
            model_name='elecmoto',
            name='id',
        ),
        migrations.AlterField(
            model_name='bike',
            name='ID_Bike',
            field=models.CharField(max_length=120, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='elecbike',
            name='ID_EBike',
            field=models.CharField(max_length=120, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='elecmoto',
            name='ID_EMoto',
            field=models.CharField(max_length=120, primary_key=True, serialize=False),
        ),
    ]