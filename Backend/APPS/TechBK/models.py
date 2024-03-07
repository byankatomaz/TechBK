from django.db import models

from django.contrib.auth.models import AbstractUser, BaseUserManager
import uuid

class ClienteManager(BaseUserManager):
    use_in_migrations = True
    
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('O e-mail é obrigatório')

        email = self.normalize_email(email)
        user = self.model(email=email, username=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        
        return self._create_user(email, password, **extra_fields)
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Super precisa ter is_superuser=True')
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Super precisa ter is_staff=True')
        
        return self._create_user(email, password, **extra_fields)

def get_file_path(_instance, filename):
    ext = filename.split('.', 1)[-1]
    filename = f'{uuid.uuid4()}.{ext}'
    return filename


class Base(AbstractUser):
    modificacao = models.DateField(auto_now=True)
    ativo = models.BooleanField(default=True, blank=True, null=True)
    
    class Meta:
        abstract = True
        

class Endereco(models.Model):
    
    rua = models.CharField(max_length=250, blank=False, null=False)
    bairro = models.CharField(max_length=100, null=False)
    cidade = models.CharField(max_length=100, null=False)
    estado = models.CharField(max_length=30, null=False)
    num = models.IntegerField(null=True)
    cep = models.IntegerField(null=True)
    
    def __str__(self):
        return f"{self.rua}, {self.num}, {self.bairro}, {self.cidade}, {self.estado}, {self.cep}"


class Cliente(Base):
    
    TIPO_CHOICES = [
        ('CLI', 'Cliente'),
        ('ADMIN', 'Administrador')
    ]
    
    nome = models.CharField('Nome', max_length=100)
    email = models.EmailField('E-mail', unique=True)
    cpf = models.CharField('CPF', max_length=11)
    tipo = models.CharField('Tipo', max_length=5, choices=TIPO_CHOICES)
    
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE, related_name='clientes')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nome', 'cpf', 'tipo', 'rua', 'bairro', 'cidade', 'estado', 'num', 'cep', 'ativo']
    
    objects = ClienteManager()
    
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='cliente_groups'  # Nome personalizado para o accessor inverso
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='cliente_user_permissions'  # Nome personalizado para o accessor inverso
    )
    
    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        unique_together = ['email', 'cpf']
    
        
    def __str__(self):
        return self.email
    
  