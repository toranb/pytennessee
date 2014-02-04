from django.contrib import admin
from django.conf.urls import patterns, include, url

from api import urls as api_urls

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(api_urls, namespace='api')),
)
