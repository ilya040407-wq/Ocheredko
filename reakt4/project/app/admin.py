from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Feedback, User


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'email_sent', 'created_at')
    list_filter = ('email_sent', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at',)


admin.site.register(User, UserAdmin)
