from django.urls import path
from .views import (
    WargaListView, 
    WargaDetailView, 
    WargaCreateView,
    WargaUpdateView,
    WargaDeleteView,
    PengaduanCreateView,
    PengaduanListView,
    PengaduanUpdateView, 
    PengaduanDeleteView
    
)

urlpatterns = [
    path('', WargaListView.as_view(), name='warga-list'),
    path('tambah/', WargaCreateView.as_view(), name='warga-tambah'),
    path('<int:pk>/', WargaDetailView.as_view(), name='warga-detail'),
    path('edit/<int:pk>/', WargaUpdateView.as_view(), name='warga-edit'),
    path('hapus/<int:pk>/', WargaDeleteView.as_view(), name='warga-hapus'),


    path('pengaduan/', PengaduanListView.as_view(), name='pengaduan-list'),
    path('pengaduan/tambah/', PengaduanCreateView.as_view(), name='pengaduan-tambah'),
    path('pengaduan/<int:pk>/edit/', PengaduanUpdateView.as_view(), name='pengaduan-edit'),
    path('pengaduan/<int:pk>/hapus/', PengaduanDeleteView.as_view(), name='pengaduan-hapus'),
]
