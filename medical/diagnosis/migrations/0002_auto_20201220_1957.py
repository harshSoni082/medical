# Generated by Django 3.0.10 on 2020-12-20 19:57

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('diagnosis', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diagnosis',
            name='result',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True, verbose_name='Result'),
        ),
    ]
