# Generated by Django 4.2.7 on 2023-12-11 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_users_groups_users_is_superuser_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='contact_no',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='users',
            name='designation',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='users',
            name='name',
            field=models.CharField(max_length=25, null=True),
        ),
        migrations.AddField(
            model_name='users',
            name='pincode',
            field=models.CharField(max_length=6, null=True),
        ),
        migrations.AddField(
            model_name='users',
            name='profile_pic',
            field=models.FileField(blank=True, null=True, upload_to='uploads/'),
        ),
    ]
