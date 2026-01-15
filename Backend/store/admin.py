from django.contrib import admin

from .models import Category, Orders, OrederItem, Product, UserProfile

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(UserProfile)
admin.site.register(Orders)
admin.site.register(OrederItem)